export const types: any = [
    {
        interfaces: ['udm.ConfigurationItem'],
        properties: [
            {
                name: 'metadata'
            },
            {
                name: 'tags'
            }

        ],
        superTypes: ['udm.BaseConfigurationItem', 'was.Deployable'],
        type: 'aws.api.Method'
    },
    {
        interfaces: ['udm.ConfigurationItem', 'udm.EmbeddedDeployed'],
        properties: [
            {
                name: 'deployable',
            },
            {
                name: 'metadata'
            }
        ],
        superTypes: ['udm.BaseDeployable'],
        type: 'aws.api.MethodSpec'
    },
    {
        interfaces: ['udm.ConfigurationItem', 'udm.EmbeddedDeployed'],
        properties: [
            {
                name: 'container'
            },
            {
                name: 'metadata'
            }
        ],
        superTypes: ['was.Deployable', 'udm.BaseDeployable'],
        type: 'aws.api.Resource'
    },
    {
        interfaces: ['udm.EmbeddedDeployed'],
        properties: [
            {
                name: 'httpMethod'
            },
            {
                name: 'metadata'
            }
        ],
        superTypes: ['was.Deployable', 'udm.BaseDeployable'],
        type: 'aws.ec2.Cloud'
    }
];