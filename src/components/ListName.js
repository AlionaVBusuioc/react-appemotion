import {css} from "@emotion/react";
import styled from "@emotion/styled";

function Text({children}){
    return <span css={css`
    color: black;
    `}>{children}</span>
}

const StyledList = styled.div`
margin-top: 30px;
font-weight: bold;
font-size: 25px;
`;


export function ListName ({children}) {
    return(
        <StyledList><Text>{children}</Text></StyledList>
    )
    }
