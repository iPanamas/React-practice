// ============================= Leson-1 Componenst and style.
// import PaintingList from "./components/Module-1 Components and style/Painting/PaintingList";
// import Section from './components/Section'
// import paintings from "./components/Module-1 Components and style/Painting/paintings.json";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import Alert from "./components/Alert/Alert";
// import Box from './components/Module-1 Components and style/Box/Box';
import Container from './components/Module-1 Components and style/Container/Container';

// ============================= Leson-2 Events, module. Forms.
// import Counter from './components/Module-2 Events, state. Forms/Counter/Counter'
// import Dropdown from './Module-2 Events, state. Forms/Dropdown/Dropdown';
// import ColorPicker from './components/Module-2 Events, state. Forms/ColorPicker/ColorPicker';
import ToDoList from './components/Module-2 Events, state. Forms/ToDoList/ToDoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <Container>
      {/* Lesson-1 */}
      {/* <PaintingList items={paintings}/> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}

      {/* <Alert text='This is alert' type="success"/>
            <Alert text='This is alert' type="warning"/>
            <Alert text='This is alert' type="error" /> */}

      {/* <Box type='small' classNames="big red" styles={{color: '#ffffff'}}/>
            <Box type='medium'/>
            <Box type='large'/> */}

      {/* Lesson-2 */}
      {/* <Counter initialValue={10}/> */}
      {/* <Dropdown/> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      <ToDoList />
    </Container>
  );
}
