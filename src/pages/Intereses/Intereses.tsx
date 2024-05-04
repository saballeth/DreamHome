import {InteresesPage} from "@/components/Intereses/Intereses"
import Header from '@/components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({})

const Intereses: React.FC = () =>{
  
    return (
        <>
            <Header colorNameLogo={true} colorNameNav={true}/>
            <ChakraProvider theme={theme}>
                <InteresesPage/>
            </ChakraProvider>
        </>
    )
}
export default Intereses;