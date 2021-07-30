exports.createResolvers = ({ createResolvers }, pluginOptions) => {
  if (pluginOptions.types && pluginOptions.types.length > 0) {
    pluginOptions.types.forEach(type => {
      createResolvers({
        [type]: {
          totalCount: {
            type: `Int!`,
            resolve: async (root, args, context, info) => {
              const length = root?.nodes?.length || 0
              return length
            },
          },
          nodes: {
            args: {
              limit: `Int`,
              skip: `Int`,
            },
            resolve: async (root, args, context, info) => {
              const allNodes =
                (await info.originalResolver(root, args, context, info)) || []
              const skip = args.skip ? args.skip : 0
              const limit = args.limit

              if (limit) {
                // if skip is set we need to offset the limit
                const offset = skip + limit
                return allNodes.slice(skip, offset)
              }

              if (skip > 0) {
                return allNodes.slice(skip)
              }

              return allNodes
            },
          },
        },
      })
    })
  }
}
