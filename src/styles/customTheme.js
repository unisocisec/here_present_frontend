import { extendTheme } from "@chakra-ui/react"

export const customTheme = extendTheme({ 
  colors: {
  },
  components: {
    Heading:{
      defaultProps: {},
      variants: {}
    },
    Text:{
      defaultProps: {},
      variants: {}
    },
    Button:{
      defaultProps: {},
      variants:{
        default:{
          bg:'',
          border: '',
          borderColor: '',
          color:'',
          _hover:'',
        }
      }
    }
  }
})


