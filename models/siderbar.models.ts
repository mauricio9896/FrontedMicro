class SiderbarItemModel{
    
    public id: string | undefined;
    public title: string | undefined;
    public routerLink: string[] | undefined;
} 

export class SidebarModel {
    public main: SiderbarItemModel[] | undefined;
}
