import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import HeroSection from "./(homepage)/HeroSection";

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <Section>
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1>
        <Balancer>
          Hello <span className="alternate-font"> World</span>, welcome to the{" "}
          <span className="alternate-font">Woven Legacy</span>
        </Balancer>
      </h1>
      <p>
        Welcome to Woven Legacy, where tradition meets artistry in the world of
        handcrafted rugs and carpets. Our showroom is dedicated to showcasing
        exquisite pieces that reflect the rich heritage of carpet weaving while
        embracing modern design sensibilities.
      </p>
      <hr />
      <h2>Example Heading</h2>
      <p>
        Welcome to Woven Legacy, where tradition meets artistry in the world of
        handcrafted rugs and carpets. Our showroom is dedicated to showcasing
        exquisite pieces that reflect the rich heritage of carpet weaving while
        embracing modern design sensibilities.
      </p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
      <h3>This is an example H3</h3>
      <p>
        Further explore the topic by discussing relevant points, providing
        insights, or sharing experiences that can engage the audience. An
        article is not just about listing information but also about
        storytelling and conveying a message that resonates with the readers.
      </p>
      <pre>
        <code>
          {`// This is an example code block
function exampleFunction() {
  console.log("This is a code snippet.");
}`}
        </code>
      </pre>
      <p>
        Lastly, you may want to conclude with a summary or a call-to-action that
        encourages readers to take the next steps, such as learning more about a
        subject or getting involved in a community discussion.
      </p>
      <blockquote>
        This is an example blockquote. It can be used to highlight important
        information or quotes from other sources.
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
      <figure>
        {/* eslint-disable-next-line */}
        <img
          src="https://i.pinimg.com/564x/fc/f0/c2/fcf0c274e3f20b0ea3b27a9c04f0269c.jpg"
          alt="Example Image"
        />
        <figcaption>This is an example figure caption.</figcaption>
      </figure>
    </article>
  );
};
