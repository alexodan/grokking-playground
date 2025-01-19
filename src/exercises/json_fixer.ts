import { describe, it } from "bun:test";

const chai = require("chai");
const expect = chai.expect;

const jsonFixer = require("../jsonFixer");

describe("JSON Fixer", () => {
  describe("Case 1", () => {
    it("should fix", () => {
      const inp = `{"key1":{"key2":"value1","key3":"value2"},"anotherkey":"va`;
      const out = `{"key1":{"key2":"value1","key3":"value2"},"anotherkey":"va"}`;
      expect(jsonFixer.fixJson(inp)).to.equal(out);
    });
  });
  describe("Case 2", () => {
    it("should fix", () => {
      const inp = `{"key1":{"key2":"value1","key3":"value2"},"anoth`;
      const out = `{"key1":{"key2":"value1","key3":"value2"},"anoth":"VALUE"}`;
      expect(jsonFixer.fixJson(inp)).to.equal(out);
    });
  });
  describe("Case 3", () => {
    it("should fix", () => {
      const inp = `{"a":"b","c":"d","e`;
      const out = `{"a":"b","c":"d","e":"VALUE"}`;
      expect(jsonFixer.fixJson(inp)).to.equal(out);
    });
  });
  describe("Case 4", () => {
    it("should fix", () => {
      const inp = `{"a":"b","c":{"a":{"a":{"a":"b`;
      const out = `{"a":"b","c":{"a":{"a":{"a":"b"}}}}`;
      expect(jsonFixer.fixJson(inp)).to.equal(out);
    });
  });
});

// JSON Fixer
// Hide Question
// You are provided with a partial response from a streaming API that returns JSON. This means the JSON object is incomplete. You need to complete the JSON object so that it can be parsed by a JSON parser to display partial information to the user.

// Your input is an incomplete JSON string, E.g.:
// {"key1":{"key2":"value1","key3":"value2"},"anotherkey":"va

// You need to return the completed JSON based on the information provided. In this case:
// {"key1":{"key2":"value1","key3":"value2"},"anotherkey":"va"}

// To keep it simple:

// Assume there are no arrays in the JSON object
// Assume all the values are strings

// Some additional rules:

// If you are presented with a key that is being started (e.g. '{"key1":{"'), make the key "UNKNOWN_KEY"
// If you need to include a value that you don't know anything about, set it to "VALUE"
