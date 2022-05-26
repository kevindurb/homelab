import Generator from 'yeoman-generator';

interface GeneratorOptions {
  destination: string;
  name: string;
}

export default class DeploymentGenerator extends Generator<GeneratorOptions> {
  constructor(args: any, opts: any) {
    super(args, opts);

    this.argument('name', { type: String, required: true });
  }

  public async create() {
    this.fs.copyTpl(
      this.templatePath('deployment.yaml'),
      this.destinationPath('deployment.yaml'),
      { name: this.options.name },
    );
  }
}
