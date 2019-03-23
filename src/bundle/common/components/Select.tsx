import * as React from 'react';
import styled from 'styled-components';

export const CustomSelect = (
    props: React.SelectHTMLAttributes<HTMLSelectElement>
) => {
    const Select = styled.select`
        height: 30px;
        width: 60px;
    `;
    return <Select {...props} />;
};
