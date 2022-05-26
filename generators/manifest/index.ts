import Generator from 'yeoman-generator';

interface GeneratorOptions {
  chart: string;
  kind: string;
}

export default class ManifestGenerator extends Generator<GeneratorOptions> {
  constructor(args: any, opts: any) {
    super(args, opts);

    this.argument('chart', { type: String, required: true });
    this.argument('kind', { type: String, required: true });
  }

  public async create() {
    const { chart, kind } = this.options;
    this.fs.copyTpl(
      this.templatePath(`${kind}.yaml`),
      this.destinationPath(`charts/${chart}/templates/${kind}.yaml`),
      { name: chart },
    );
  }
}
