import {Component} from 'react'
import {
  BgContainer,
  Heading,
  FormContainer,
  InputCards,
  Label,
  Input,
  OutputContainer,
  Button,
  Select,
  BgImage,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    isSubmit: false,
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({isSubmit: true})
  }

  onImageUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, isSubmit} = this.state
    return (
      <BgContainer>
        <FormContainer onSubmit={this.onSubmit}>
          <Heading>Meme Generator</Heading>
          <InputCards>
            <Label htmlFor="img_url">Image URL</Label>
            <Input
              type="text"
              id="img_url"
              onChange={this.onImageUrl}
              placeholder="Enter the Image Url"
            />
          </InputCards>
          <InputCards>
            <Label htmlFor="top_text">Top Text</Label>

            <Input
              type="text"
              id="top_text"
              onChange={this.onTopText}
              placeholder="Enter the Top Text"
            />
          </InputCards>
          <InputCards>
            <Label htmlFor="bottom_text">Bottom Text</Label>

            <Input
              type="text"
              id="bottom_text"
              onChange={this.onBottomText}
              placeholder="Enter the Bottom Text"
            />
          </InputCards>
          <InputCards>
            <Label htmlFor="font-size">Font Size</Label>

            <Select id="font-size" onChange={this.onFontSize}>
              {fontSizesOptionsList.map(eachItem => (
                <option key={eachItem.optionId}>{eachItem.displayText}</option>
              ))}
            </Select>
          </InputCards>
          <Button type="submit">Generate</Button>
        </FormContainer>
        {isSubmit && (
          <OutputContainer>
            <BgImage data-testid="meme" imgUrl={imgUrl}>
              <Para fontSize={`${fontSize}px`}>{topText}</Para>
              <Para fontSize={`${fontSize}px`}>{bottomText}</Para>
            </BgImage>
          </OutputContainer>
        )}
      </BgContainer>
    )
  }
}

export default MemeGenerator
