import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import packageJson from '../package.json' with { type: 'json' };
import { csfd } from '../src/index.js';

// Initialize the MCP server
const server = new McpServer({
  name: packageJson.name,
  version: packageJson.version
});

/**
 * TOOL 1: Search
 * Description: Essential first step to get IDs for movies or creators.
 */
server.tool(
  'search',
  'Searches for a movie, TV series, or person on CSFD.cz. Returns a list of results with IDs. Use this tool FIRST to find the ID needed for other tools.',
  {
    query: z.string().describe('Search query (movie title, series, or actor name)')
  },
  async ({ query }) => {
    try {
      const results = await csfd.search(query);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2)
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
server.tool(
  'get_movie',
  'Retrieves detailed information about a specific movie or series, including rating, plot, genres, and actors. Requires a numeric CSFD ID.',
  {
    id: z.number().describe("CSFD Movie ID (found using the 'search' tool)")
  },
  async ({ id }) => {
    try {
      const movie = await csfd.movie(id);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(movie, null, 2)
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
server.tool(
  'get_creator',
  'Retrieves information about a specific creator (actor, director, etc.), including their biography and filmography. Requires a numeric CSFD ID.',
  {
    id: z.number().describe("CSFD Creator ID (found using the 'search' tool)")
  },
  async ({ id }) => {
    try {
      const creator = await csfd.creator(id);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(creator, null, 2)
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
server.tool(
  'get_user_ratings',
  'Retrieves movie ratings from a specific CSFD user. Returns a list of movies with their user rating (0-5 stars). Supports pagination and filtering by film type.',
  {
    user: z.union([z.string(), z.number()]).describe('CSFD User ID (numeric) or username'),
    page: z.number().optional().describe('Page number to fetch (default: 1)'),
    allPages: z.boolean().optional().describe('Fetch all pages at once (use wisely, may be slow)'),
    allPagesDelay: z
      .number()
      .optional()
      .describe('Delay in ms between page requests when using allPages'),
    excludes: z
      .array(z.string())
      .optional()
      .describe('Film types to exclude (e.g. "seriál", "TV film")'),
    includesOnly: z
      .array(z.string())
      .optional()
      .describe('Only include these film types (e.g. "film")')
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
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2)
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
server.tool(
  'get_user_reviews',
  'Retrieves movie reviews written by a specific CSFD user. Returns a list of movies with their review text and rating. Supports pagination and filtering by film type.',
  {
    user: z.union([z.string(), z.number()]).describe('CSFD User ID (numeric) or username'),
    page: z.number().optional().describe('Page number to fetch (default: 1)'),
    allPages: z.boolean().optional().describe('Fetch all pages at once (use wisely, may be slow)'),
    allPagesDelay: z
      .number()
      .optional()
      .describe('Delay in ms between page requests when using allPages'),
    excludes: z
      .array(z.string())
      .optional()
      .describe('Film types to exclude (e.g. "seriál", "TV film")'),
    includesOnly: z
      .array(z.string())
      .optional()
      .describe('Only include these film types (e.g. "film")')
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
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2)
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
server.tool(
  'get_cinemas',
  'Retrieves cinema screenings for a given district in Czech Republic. Returns a list of cinemas with their current screenings, showtimes, and movie details.',
  {
    district: z.union([z.number(), z.string()]).describe('District ID (numeric) or name'),
    period: z
      .enum(['today', 'tomorrow', 'weekend', 'week', 'month'])
      .describe('Time period for screenings')
  },
  async ({ district, period }) => {
    try {
      const results = await csfd.cinema(district, period);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2)
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

// Start the server using stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('CSFD MCP Server running on stdio...');
}

main().catch((error) => {
  console.error('Fatal error in MCP server:', error);
  process.exit(1);
});
