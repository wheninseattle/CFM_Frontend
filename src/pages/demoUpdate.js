import FridgeSuccess from 'components/FridgeSuccess/FridgeSuccess';

const data = {
  img: {
    width: 163,
    height: 244,
    src: '/mascot/happyFridge.svg',
    alt: 'Happy fridge image',
  },
  title: 'Success!',
  text: 'You have successfully updated a community fridge listing.',
  buttons: [{ color: 'blue', text: 'GO TO FRIDGE' }],
};

export default function demoAdd() {
  return (
    <>
      <FridgeSuccess
        title={data.title}
        text={data.text}
        img={data.img}
        buttons={data.buttons}
      />
    </>
  );
}
