import Budget from './Budget'
describe("Budget Component renders correctly", ()=> {
    let budget = {...budget}
    it('renders as expected', ()=> {
        let wrapper = shallow(<Budget />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('renders with the expected props', ()=> {
        let wrapper = mount(<Budget budget={budget}/>)
        expect(wrapper.props().budget).toEqual(budgets)
    })
    it('renders without giving any errors', ()=> {
        let wrapper = shallow(<Budget />)
        expect(wrapper.state('error')).toEqual(null)
    })
})