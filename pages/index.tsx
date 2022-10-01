import type { NextPage } from 'next';
import * as Atom from '../components/atoms';

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <Atom.Label>This page has the sole purpose of being a component demo</Atom.Label>
      <div>
        <div className="mt-2">
          <Atom.Label>Primary buttons</Atom.Label>
          <div className="flex space-x-3 p-1">
            <Atom.Button primary>Primary Default</Atom.Button>
            <div>
              <Atom.Button primary small>
                Primary Small
              </Atom.Button>
            </div>
            <Atom.Button primary medium>
              Primary Medium
            </Atom.Button>
          </div>
        </div>
        <div className="mt-2">
          <Atom.Label>Secondary buttons</Atom.Label>
          <div className="flex space-x-3 p-1">
            <Atom.Button>Secondary Default</Atom.Button>
            <Atom.Button small>Secondary Small</Atom.Button>
            <Atom.Button medium>Secondary Medium</Atom.Button>
          </div>
        </div>
        <div className="mt-2">
          <Atom.Label>Warning buttons</Atom.Label>
          <div className="flex space-x-3 p-1">
            <Atom.Button warning>Warning Default</Atom.Button>
            <Atom.Button warning small>
              Warning Small
            </Atom.Button>
            <Atom.Button warning medium>
              Warning Medium
            </Atom.Button>
          </div>
        </div>
      </div>
      <div>
        <Atom.Label>Input</Atom.Label>
        <Atom.Input className="ml-3 mt-2" />
      </div>
      <div>
        <Atom.Label>THIS IS A LABEL</Atom.Label>
      </div>
    </div>
  );
};

export default Home;
