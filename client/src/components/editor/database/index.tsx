import { Node } from 'slate';
// Import the `Node` helper interface from Slate.

// Define a serializing function that takes a value and returns a string.
export const serialize = (value: any) => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n: any) => Node.string(n))
      // Join them all with line breaks denoting paragraphs.
      .join('\n')
  );
};

// Define a deserializing function that takes a string and returns a value.
export const deserialize = (string: string) => {
  // Return a value array of children derived by splitting the string.
  return string.split('\n').map((line: string) => {
    return {
      children: [{ text: line }],
    };
  });
};
