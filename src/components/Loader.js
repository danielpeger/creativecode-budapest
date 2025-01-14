import React from "react"
import styled, { keyframes } from "styled-components"
import Loader1 from "../../static/loader/loader1.svg";
import Loader2 from "../../static/loader/loader2.svg";
import Loader3 from "../../static/loader/loader3.svg";
import Loader4 from "../../static/loader/loader4.svg";
import Loader5 from "../../static/loader/loader5.svg";
import Loader6 from "../../static/loader/loader6.svg";
import Loader7 from "../../static/loader/loader7.svg";
import Loader8 from "../../static/loader/loader8.svg";


const cycle = keyframes`
    0%, 12.4% {
      opacity: 1;
    }
    12.5%, 100% {
      opacity: 0;
    }
`;

const LoaderElement = styled.div`
    position: relative;
    width: 90px;
    height: 110px;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        animation: ${cycle} 8s infinite;
    }
`;

const AnimatedLoader1 = styled(Loader1)`
    animation-delay: 0s;
`;

const AnimatedLoader2 = styled(Loader2)`
    animation-delay: 1s;
`;

const AnimatedLoader3 = styled(Loader3)`
    animation-delay: 2s;
`;

const AnimatedLoader4 = styled(Loader4)`
    animation-delay: 3s;
`;

const AnimatedLoader5 = styled(Loader5)`
    animation-delay: 4s;
`;

const AnimatedLoader6 = styled(Loader6)`
    animation-delay: 5s;
`;

const AnimatedLoader7 = styled(Loader7)`
    animation-delay: 6s;
`;

const AnimatedLoader8 = styled(Loader8)`
    animation-delay: 7s;
`;

const Loader = () => {
    return (
        <LoaderElement>
            <AnimatedLoader1/>
            <AnimatedLoader2/>
            <AnimatedLoader3/>
            <AnimatedLoader4/>
            <AnimatedLoader5/>
            <AnimatedLoader6/>
            <AnimatedLoader7/>
            <AnimatedLoader8/>
        </LoaderElement>
    )
}

export default Loader;