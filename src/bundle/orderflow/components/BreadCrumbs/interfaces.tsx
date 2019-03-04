export interface BreadCrumb {
    name: String;
    action: () => void;
    isActive: Boolean;
    isCurrent: Boolean;
}
