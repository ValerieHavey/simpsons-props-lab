import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} name="Homer Simpson" description="Loves his family as much as donuts." email="Homer@simpsons.com"/>
              <ProfileCard pic={lisa} name="Lisa Simpson" description="Amazing saxaphone player." email="Lisa@simpsons.com" />
              <ProfileCard pic={maggie} name="Maggie Simpson" description="Maggie is known to have murdered at least one person." email="Maggie@simpsons.com" />
              <ProfileCard pic={marge} name="Marge Simpson" description="Marge is a role model." email="Marge@simpsons.com"/>
              <ProfileCard pic={bart} name="Bart Simpson" description="Bart is the eternal prankster." email="Bart@simpsons.com" />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
