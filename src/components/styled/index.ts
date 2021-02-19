import styled, {css} from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  align-content: space-around;
`;

const NoData = styled.Text`
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const Launchs = styled.View`
  height: 40%;
  width: 100%;
  padding: 15px;
`;

const Pickers = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const ListItems = styled.Text`
  background-color: #222;
  color: #fff;
  margin-bottom: 5px;
  padding: 5px;
`;

export {Container, Pickers, Launchs, ListItems, NoData};
