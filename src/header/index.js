import styled from 'styled-components';

const Container = styled.header`
  box-shadow: 0 3px 5px 0 grey;
  .Header__box {
    height: 40px;
    width: 60%;
    margin: 0 auto;
  }
  .Header__title {
    line-height: 40px;
    font-size: 1.32rem;
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 1024px) {
    .Header__box {
      width: 82%;
    }
  }
  @media (max-width: 768px) {
    .Header__box {
      width: 98%;
    }
  }
`;

export default function Header() {
  return (
    <Container className="Header">
      <div className="Header__box">
        <h1 className="Header__title">Chess</h1>
      </div>
    </Container>
  );
}
