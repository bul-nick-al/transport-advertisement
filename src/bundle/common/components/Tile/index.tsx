import * as React from 'react';
import { TileStyledProps, TileTheme, getTheme } from './theme';
import { StyledTile } from './styled';

class Tile extends React.PureComponent<TileStyledProps, {}> {
    public render(): React.ReactNode {
        const theme: TileTheme = getTheme(this.props);

        return <StyledTile theme={theme}>{this.props.children}</StyledTile>;
    }
}

export default Tile;
