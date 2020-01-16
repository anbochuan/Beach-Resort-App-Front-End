import styled from "styled-components";
import defaultImg from "../../public/images/room-1.jpeg";

const StyledBanner = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledBanner;
