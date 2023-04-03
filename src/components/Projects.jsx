import React from 'react';
import cover from '../assets/projects/cover.jpg';
import ecomerce from '../assets/projects/e-comerce.png';
import todolist from '../assets/projects/todolist.png';
import rickandmorty from '../assets/projects/rickandmorty.png';
import { BsLink45Deg } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__title">
        <h2>Projects</h2>
        <p>Things I've built so far</p>
      </div>

      <div className="projects__cards">
        <div className="card">
          <div className="card__img">
            <img src={ecomerce} alt="card's cover" />
          </div>
          <div className="card__body">
            <h3>E-comerce</h3>
            <p>
              A sleek and modern e-commerce platform designed for sewing
              enthusiasts of all levels. Features include a shopping cart and
              individual product pages with detailed information, high-quality
              images, and customer reviews.
            </p>
          </div>
          <div className="card__info">
            <span>
              <strong>Tech Stack: </strong> HTML5, CSS3, JavaScript.
            </span>
            <div className="card__links">
              <div className="links">
                <BsLink45Deg />
                <a
                  href="https://rositacosturacriativa.netlify.app"
                  target="_blank"
                >
                  Live Preview
                </a>
              </div>
              <div className="links">
                <BsGithub />
                <a
                  href="https://github.com/lucasdef15/ecomerce-project"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__img">
            <img src={todolist} alt="card's cover" />
          </div>
          <div className="card__body">
            <h3>Todo-list</h3>
            <p>
              Keep track of your tasks and stay organized with this intuitive
              todo-list app. Add, edit, delete items and mark them as completed.
              With responsive user interface, this app is perfect for personal
              use.
            </p>
          </div>

          <div className="card__info">
            <span>
              <strong>Tech Stack: </strong> React.js, CSS3.
            </span>
            <div className="card__links">
              <div className="links">
                <BsLink45Deg />
                <a
                  href="https://tourmaline-bavarois-49d2df.netlify.app"
                  target="_blank"
                >
                  Live Preview
                </a>
              </div>
              <div className="links">
                <BsGithub />
                <a
                  href="https://github.com/lucasdef15/react_todo-list"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__img">
            <img src={rickandmorty} alt="card's cover" />
          </div>
          <div className="card__body">
            <h3>Rick and Morty Api</h3>
            <p>
              Explore the world of Rick and Morty with this API that provides
              access to information about characters. With a simple and
              user-friendly interface, this API is perfect for developers and
              fans alike.
            </p>
          </div>
          <div className="card__info">
            <span>
              <strong>Tech Stack: </strong> React.js, React Router, Axios.
            </span>
            <div className="card__links">
              <div className="links">
                <BsLink45Deg />
                <a
                  href="https://celebrated-figolla-13a43e.netlify.app"
                  target="_blank"
                >
                  Live Preview
                </a>
              </div>
              <div className="links">
                <BsGithub />
                <a
                  href="https://github.com/lucasdef15/Rick_and_Morty_API_Project"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__img">
            <img src={cover} alt="card's cover" />
          </div>
          <div className="card__body">
            <h3>Upcoming</h3>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
          </div>
          <div className="card__info">
            <span>
              <strong>Tech Stack: </strong> None
            </span>
            <div className="card__links">
              <div className="links">
                <BsLink45Deg />
                <a href="#">Live Preview</a>
              </div>
              <div className="links">
                <BsGithub />
                <a href="#" target="_blank">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__img">
            <img src={cover} alt="card's cover" />
          </div>
          <div className="card__body">
            <h3>Upcoming</h3>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
          </div>
          <div className="card__info">
            <span>
              <strong>Tech Stack: </strong> None
            </span>
            <div className="card__links">
              <div className="links">
                <BsLink45Deg />
                <a href="#">Live Preview</a>
              </div>
              <div className="links">
                <BsGithub />
                <a href="#" target="_blank">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__img">
            <img src={cover} alt="card's cover" />
          </div>
          <div className="card__body">
            <h3>Upcoming</h3>
            <p>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </p>
          </div>
          <div className="card__info">
            <span>
              <strong>Tech Stack: </strong> None
            </span>
            <div className="card__links">
              <div className="links">
                <BsLink45Deg />
                <a href="#">Live Preview</a>
              </div>
              <div className="links">
                <BsGithub />
                <a href="#" target="_blank">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
