import CharacterGallery from '../components/CharacterGallery'
import { shallow } from 'enzyme'
import Character from '../components/Character'


// helper functions
const setup = () => shallow(<CharacterGallery />)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)


describe('<CharacterGallery/> component', () =>{

    // renders
    it('renders', () => {
        const wrapper = setup()
        expect(wrapper.length).toBe(1)
    })

    // should render a div tag with attr char-gallery
    it('renders a div tag with a data-test attribute of char-gallery', () =>{
        const wrapper = setup()
        const divTag = findByTestAttr(wrapper, 'char-gallery')
        expect(divTag).toHaveLength(1)
    })

     // Prompt 4: The `char-gallery` div tag should also have a class of gallery-container
     it('char-gallery should have a class of gallery-container', () => {
        const wrapper = setup()
        const divTag = findByTestAttr(wrapper, 'char-gallery')
        expect(divTag.hasClass('gallery-container')).toBe(true)
    })

 describe('<CharacterGallery/> Dynamically renders', () => {
     it ('renders a Character component for each dataset', () => {
         const wrapper = setup()
         expect(wrapper.find(Character)).toHaveLength(53)
     })
 })

})