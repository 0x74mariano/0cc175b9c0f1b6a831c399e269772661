export interface IMicrofrontend {
  id: string;
  name: string;
  description: string;
  alias: string;
  route: string;
  active: boolean;
  domainId: string;
  subdomainId: string;
  communityId: string;
  releaseTrainId: string;
  squadId: string;
  initialsId: string;
  environmentType: IEnvironmentType;
  server: IServer;
  applicationType: IApplicationType;
  allows: IAllows;
  keywords: string[];
  parameters?: IParameters[];
}

interface IEnvironmentType {
  id: number;
  name: string;
  description: string;
  active: boolean;
}

interface IServer {
  id: number;
  name: string;
  host: string;
  environmentType: IEnvironmentType;
}

interface IApplicationType {
  id: number;
  name: string;
}

interface IAllows {
  edit: boolean;
}

interface IParameters {
  [key: string]: any;
}