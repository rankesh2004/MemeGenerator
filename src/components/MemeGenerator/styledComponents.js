import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 200px;
`
export const Heading = styled.h1`
  color: #35469c;
`
export const FormContainer = styled.form`
  width: 50%;
  margin-right: 200px;
`
export const InputCards = styled.div`
  margin-bottom: 10px;
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  width: 320px;
  height: 30px;
`
export const OutputContainer = styled.div`
  width: 50%;
`
export const Button = styled.button`
  background-color: #0b69ff;
  width: 150px;
  height: 35px;
  border-radius: 5px;
  color: #ffffff;
  border: 0px;
`
export const Select = styled.select`
  width: 320px;
  height: 30px;
`
export const BgImage = styled.div`
  background-image: url(${props => props.imgUrl});
  width: 300px;
  height: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Para = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
`
