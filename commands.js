import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// Hackathon FAQ command
const HACK_FAQ = {
  name: 'hackathon-faq',
  description: 'Hackathon FAQ',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [TEST_COMMAND, HACK_FAQ];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
