import Styled from 'styled-components';

const BookWrap = Styled.div`
  padding:100px;
  background: #fff;
  display:flex;
  align-self:center;
  justify-content:space-between;
  margin: 100px;

  > div{
    
    padding: 30px;
    background: teal;
    width:49%;
    margin:10px;
    h1{
      color:#fff
    }
    table{
      th, td{
        padding:5px;
        color:#fff;
      }
    }
    form{
      input{
        padding: 10px;
        width: 100%;
        margin-bottom:10px;
        outline: none;
        box-sizing: border-box;
      }
      button{
        padding:10px;
        font-size:16px;
        color:#000;
        cursor:pointer;
      }
    }
  }

`;



export default BookWrap;