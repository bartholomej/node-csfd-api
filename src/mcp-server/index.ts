import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import packageJson from '../../package.json' with { type: 'json' };
import { csfd } from '../index.js';

// Initialize the MCP server
const server = new McpServer({
  name: packageJson.name,
  version: packageJson.version
});

/**
 * TOOL 1: Search
 * Description: Essential first step to get IDs for movies or creators.
 */
server.registerTool(
  'search',
  {
    title: 'Search',
    description:
      'Searches for a movie, TV series, or person on CSFD.cz. Returns a list of results with IDs. Use this tool FIRST to find the ID needed for other tools.',
    inputSchema: {
      query: z
        .string()
        .describe('Search query (movie title, series, or actor, director, etc. name)')
    },
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async ({ query }) => {
    try {
      const results = await csfd.search(query);

      return {
        structuredContent: results as unknown as Record<string, unknown>,
        content: [
          {
            type: 'text',
            text: `Found ${results.movies.length} movies, ${results.tvSeries.length} TV series, and ${results.users.length} users.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error during search: ${error}` }],
        isError: true
      };
    }
  }
);

/**
 * TOOL 2: Movie Details
 * Description: Returns detailed info about a specific movie/series.
 */
server.registerTool(
  'get_movie',
  {
    title: 'Get Movie',
    description:
      'Retrieves detailed information about a specific movie or series, including rating, plot, genres, and actors. Requires a numeric CSFD ID.',
    inputSchema: {
      id: z.number().describe("CSFD Movie ID (found using the 'search' tool)")
    },
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async ({ id }) => {
    try {
      const movie = await csfd.movie(id);
      return {
        structuredContent: movie as unknown as Record<string, unknown>,
        content: [
          {
            type: 'text',
            text: `Movie ${movie.title} (${movie.year}) with rating ${movie.rating} retrieved successfully.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error retrieving movie details: ${error}` }],
        isError: true
      };
    }
  }
);

/**
 * TOOL 3: Creator Details
 * Description: Returns detailed info about a person (actor, director).
 */
server.registerTool(
  'get_creator',
  {
    title: 'Get Creator',
    description:
      'Retrieves information about a specific creator (actor, director, etc.), including their biography and filmography. Requires a numeric CSFD ID.',
    inputSchema: {
      id: z.number().describe('CSFD Creator ID')
    },
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async ({ id }) => {
    try {
      const creator = await csfd.creator(id);
      return {
        structuredContent: creator as unknown as Record<string, unknown>,
        content: [
          {
            type: 'text',
            text: `Creator ${creator.name} retrieved successfully.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error retrieving creator details: ${error}` }],
        isError: true
      };
    }
  }
);

/**
 * TOOL 4: User Ratings
 * Description: Returns ratings from a specific CSFD user.
 */
server.registerTool(
  'get_user_ratings',
  {
    title: 'Get User Ratings',
    description:
      'Retrieves movie ratings from a specific CSFD user. Returns a list of movies with their user rating (0-5 stars). Supports pagination and filtering by film type.',
    inputSchema: {
      user: z.union([z.string(), z.number()]).describe('CSFD User ID (numeric) or username'),
      page: z.number().optional().describe('Page number to fetch (default: 1)'),
      allPages: z
        .boolean()
        .optional()
        .describe('Fetch all pages at once (use wisely, may be slow)'),
      allPagesDelay: z
        .number()
        .optional()
        .describe('Delay in ms between page requests when using allPages'),
      excludes: z
        .array(z.string())
        .optional()
        .describe('Film types to exclude (e.g. "series", "tv-film")'),
      includesOnly: z
        .array(z.string())
        .optional()
        .describe('Only include these film types (e.g. "film")')
    },
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async ({ user, page, allPages, allPagesDelay, excludes, includesOnly }) => {
    try {
      const results = await csfd.userRatings(user, {
        page,
        allPages,
        allPagesDelay,
        excludes: excludes as any,
        includesOnly: includesOnly as any
      });
      return {
        structuredContent: { results },
        content: [
          {
            type: 'text',
            text: `Retrieved ${results.length} user ratings successfully.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error retrieving user ratings: ${error}` }],
        isError: true
      };
    }
  }
);

/**
 * TOOL 5: User Reviews
 * Description: Returns reviews written by a specific CSFD user.
 */
server.registerTool(
  'get_user_reviews',
  {
    title: 'Get User Reviews',
    description:
      'Retrieves movie reviews written by a specific CSFD user. Returns a list of movies with their review text and rating.',
    inputSchema: {
      user: z.union([z.string(), z.number()]).describe('CSFD User ID (numeric) or username'),
      page: z.number().optional().describe('Page number to fetch (default: 1)'),
      allPages: z
        .boolean()
        .optional()
        .describe('Fetch all pages at once (use wisely, may be slow)'),
      allPagesDelay: z
        .number()
        .optional()
        .describe('Delay in ms between page requests when using allPages'),
      excludes: z
        .array(z.string())
        .optional()
        .describe('Film types to exclude (e.g. "series", "tv-film")'),
      includesOnly: z
        .array(z.string())
        .optional()
        .describe('Only include these film types (e.g. "film")')
    },
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async ({ user, page, allPages, allPagesDelay, excludes, includesOnly }) => {
    try {
      const results = await csfd.userReviews(user, {
        page,
        allPages,
        allPagesDelay,
        excludes: excludes as any,
        includesOnly: includesOnly as any
      });
      return {
        structuredContent: { results },
        content: [
          {
            type: 'text',
            text: `Retrieved ${results.length} user reviews successfully.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error retrieving user reviews: ${error}` }],
        isError: true
      };
    }
  }
);

/**
 * TOOL 6: Cinemas
 * Description: Returns cinema screenings for a given district and time period.
 */
server.registerTool(
  'get_cinemas',
  {
    title: 'Get Cinemas',
    description:
      'Retrieves cinema screenings for a given district in Czech Republic. Returns a list of cinemas with their current screenings, showtimes, and movie names and ids.',
    inputSchema: {
      district: z.union([z.number(), z.string()]).describe('District ID (numeric) or name'),
      period: z
        .enum(['today', 'tomorrow', 'weekend', 'week', 'month'])
        .describe('Time period for screenings')
    },
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async ({ district, period }) => {
    try {
      const results = await csfd.cinema(district, period);
      return {
        structuredContent: { results },
        content: [
          {
            type: 'text',
            text: `Retrieved ${results.length} cinema screenings successfully.`
          }
        ]
      };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `Error retrieving cinema data: ${error}` }],
        isError: true
      };
    }
  }
);

/**
 * PROMPT: Actor's Top Rated Works
 * Example: "Find movies starring Mads Mikkelsen and give me the top 5 sorted by rating."
 */
server.registerPrompt(
  'actor-top-rated',
  {
    title: 'Actor Top Rated',
    description: 'Finds and ranks the best movies of a specific actor or creator.',
    argsSchema: {
      actorName: z.string().describe('Name of the actor or director')
    }
  },
  async ({ actorName }) => {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `First, search for the person "${actorName}" to get their ID. Then, retrieve their full profile to see their filmography. From the results, identify the top 5 highest-rated movies they acted in. Finally, provide a bulleted list with the movie titles, years, and their CSFD ratings.`
          }
        }
      ]
    };
  }
);

// Start the server using stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`--- CSFD MCP Server (v${packageJson.version}) ---`);
  console.error('Status: Running via Stdio');
  console.error('\nTo use this server in Claude Desktop, add this to your config:');

  // console.error('\nOption A: Direct via npx (recommended for users)');
  console.error(
    JSON.stringify(
      {
        'node-csfd-api': {
          command: 'npx',
          args: ['-y', 'node-csfd-api', 'mcp']
        }
      },
      null,
      2
    )
  );

  // console.error('\nOption B: Local build (recommended for developers)');
  // console.error(
  //   JSON.stringify(
  //     {
  //       'node-csfd-api-local': {
  //         command: 'node',
  //         args: [process.argv[1]] // Dynamically takes the path to the currently running file
  //       }
  //     },
  //     null,
  //     2
  //   )
  // );
}

main().catch((error) => {
  console.error('Fatal error in MCP server:', error);
  process.exit(1);
});
