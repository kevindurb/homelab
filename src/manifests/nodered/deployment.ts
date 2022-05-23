import { Deployment } from '../../entities/Deployment';

const labels = {
  app: 'nodered',
  component: 'web',
};

export const deployment = new Deployment({
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'nodered-deployment',
    labels,
  },
  spec: {
    replicas: 1,
    selector: {
      matchLabels: labels,
    },
    template: {
      metadata: {
        labels,
      },
      spec: {
        containers: [
          {
            name: 'nodered',
            image: '',
            ports: [{ name: 'web', containerPort: 1880 }],
          },
        ],
      },
    },
  },
});
