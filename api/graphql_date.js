const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },
  // eslint-disable-next-line consistent-return
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const value = new Date(ast.value);
      // eslint-disable-next-line no-restricted-globals
      return isNaN(value) ? undefined : value;
    }
  },
  parseValue(value) {
    const dateValue = new Date(value);
    // eslint-disable-next-line no-restricted-globals
    return isNaN(dateValue) ? undefined : dateValue;
  },
});

module.exports = GraphQLDate;
