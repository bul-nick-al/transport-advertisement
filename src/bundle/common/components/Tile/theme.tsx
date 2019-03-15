interface TileStyledProps {
    width: string;
    height?: string;
}

interface TileTheme {
    width: string;
    height?: string;
}

const getTheme: (props: TileStyledProps) => TileTheme = props => {
    return {
        width: props.width,
        height: props.height ? props.height : 'auto'
    };
};

export { TileStyledProps, TileTheme, getTheme };
