import {css} from "@emotion/react";
import styled from "@emotion/styled";

function Text({children}){
    return <span css={css`
    color: black;
    `}>{children}</span>
}

const StyledList = styled.div`
margin-top: 30px;
`;


export function List ({children}) {
    return(
        <StyledList><Text>{children}</Text></StyledList>
    )
    }
