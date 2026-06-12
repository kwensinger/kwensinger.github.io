export interface IApp{
    name: string;
    src: string;
}

export interface ISkill{
    title: string;
    apps: IApp[];
    color: string;
    span: string;
}