import { ComponentMeta } from "@storybook/react";
import StickyItem from "./StickyItem";
import StickyProvider from "./StickyProvider";

export default {
  title: "Components/Sticky",
  component: StickyProvider,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof StickyProvider>;

export const Primary = () => {
  return (
    <StickyProvider>
      <div className="max-w-xl flex flex-col mx-auto py-12 text-justify text-xl">
        <p>
          I'm trying not to, kid. All right. Well, take care of yourself, Han. I
          guess that's what you're best at, ain't it? I'm surprised you had the
          courage to take the responsibility yourself. As you wish. You're all
          clear, kid. Let's blow this thing and go home!
        </p>
        <p>
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me. You're all clear, kid. Let's blow this thing and go home!
        </p>
        <StickyItem>
          <div className="bg-orange-300 font-semibold p-2 text-2xl">
            I have traced the Rebel spies to her. Now she is my only link to
            finding their secret base.
          </div>
        </StickyItem>
        <p>
          I'm trying not to, kid. All right. Well, take care of yourself, Han. I
          guess that's what you're best at, ain't it? I'm surprised you had the
          courage to take the responsibility yourself. As you wish. You're all
          clear, kid. Let's blow this thing and go home!
        </p>
        <p>
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me. You're all clear, kid. Let's blow this thing and go home!
        </p>
        <StickyItem>
          <div className="bg-orange-600 font-semibold p-2 text-2xl">
            I don't know what you're talking about. I am a member of the
            Imperial Senate on a diplomatic mission to Alderaan
          </div>
        </StickyItem>
        <p>
          Hey, Luke! May the Force be with you. No! Alderaan is peaceful. We
          have no weapons. You can't possibly… I call it luck. All right. Well,
          take care of yourself, Han. I guess that's what you're best at, ain't
          it?
        </p>
        <ol>
          <li>
            I don't know what you're talking about. I am a member of the
            Imperial Senate on a diplomatic mission to Alderaan--
          </li>
          <li>
            Leave that to me. Send a distress signal, and inform the Senate that
            all on board were killed.
          </li>
          <li>
            All right. Well, take care of yourself, Han. I guess that's what
            you're best at, ain't it?
          </li>
        </ol>
        <p>
          Your eyes can deceive you. Don't trust them. The plans you refer to
          will soon be back in our hands. She must have hidden the plans in the
          escape pod. Send a detachment down to retrieve them, and see to it
          personally, Commander. There'll be no one to stop us this time!
        </p>
        <p>
          I find your lack of faith disturbing. Oh God, my uncle. How am I ever
          gonna explain this? Don't be too proud of this technological terror
          you've constructed. The ability to destroy a planet is insignificant
          next to the power of the Force.
        </p>
        <p>
          He is here. I care. So, what do you think of her, Han? She must have
          hidden the plans in the escape pod. Send a detachment down to retrieve
          them, and see to it personally, Commander. There'll be no one to stop
          us this time!
        </p>
        <p>
          Hokey religions and ancient weapons are no match for a good blaster at
          your side, kid. Alderaan? I'm not going to Alderaan. I've got to go
          home. It's late, I'm in for it as it is. You mean it controls your
          actions?
        </p>
        <p>
          Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with
          you. Red Five standing by. I want to come with you to Alderaan.
          There's nothing for me here now. I want to learn the ways of the Force
          and be a Jedi, like my father before me.
        </p>
        <p>
          You're all clear, kid. Let's blow this thing and go home! I suggest
          you try it again, Luke. This time, let go your conscious self and act
          on instinct. Obi-Wan is here. The Force is with him. Remember, a Jedi
          can feel the Force flowing through him.
        </p>
        <p>
          What!? Escape is not his plan. I must face him, alone. What!? The more
          you tighten your grip, Tarkin, the more star systems will slip through
          your fingers.
        </p>
        <p>
          Don't act so surprised, Your Highness. You weren't on any mercy
          mission this time. Several transmissions were beamed to this ship by
          Rebel spies. I want to know what happened to the plans they sent you.
          I suggest you try it again, Luke. This time, let go your conscious
          self and act on instinct.
        </p>
        <p>
          Still, she's got a lot of spirit. I don't know, what do you think?
          Obi-Wan is here. The Force is with him. She must have hidden the plans
          in the escape pod. Send a detachment down to retrieve them, and see to
          it personally, Commander. There'll be no one to stop us this time!
        </p>
        <p>
          You don't believe in the Force, do you? Don't underestimate the Force.
          A tremor in the Force. The last time I felt it was in the presence of
          my old master. Oh God, my uncle. How am I ever gonna explain this?
        </p>
        <StickyItem>
          <div className="bg-orange-900 font-semibold p-2 text-2xl">
            You're all clear, kid. Let's blow this thing and go home!
          </div>
        </StickyItem>
        <p>
          What?! I don't know what you're talking about. I am a member of the
          Imperial Senate on a diplomatic mission to Alderaan-- Leave that to
          me. Send a distress signal, and inform the Senate that all on board
          were killed.
        </p>
        <ul>
          <li>
            Hokey religions and ancient weapons are no match for a good blaster
            at your side, kid.
          </li>
          <li>He is here.</li>
          <li>Remember, a Jedi can feel the Force flowing through him.</li>
        </ul>
        <p>
          As you wish. He is here. What good is a reward if you ain't around to
          use it? Besides, attacking that battle station ain't my idea of
          courage. It's more like…suicide. Partially, but it also obeys your
          commands.
        </p>
        <p>
          Your eyes can deceive you. Don't trust them. The plans you refer to
          will soon be back in our hands. She must have hidden the plans in the
          escape pod. Send a detachment down to retrieve them, and see to it
          personally, Commander. There'll be no one to stop us this time!
        </p>
        <p>
          I find your lack of faith disturbing. Oh God, my uncle. How am I ever
          gonna explain this? Don't be too proud of this technological terror
          you've constructed. The ability to destroy a planet is insignificant
          next to the power of the Force.
        </p>
        <p>
          He is here. I care. So, what do you think of her, Han? She must have
          hidden the plans in the escape pod. Send a detachment down to retrieve
          them, and see to it personally, Commander. There'll be no one to stop
          us this time!
        </p>
        <p>
          Hokey religions and ancient weapons are no match for a good blaster at
          your side, kid. Alderaan? I'm not going to Alderaan. I've got to go
          home. It's late, I'm in for it as it is. You mean it controls your
          actions?
        </p>
        <p>
          Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with
          you. Red Five standing by. I want to come with you to Alderaan.
          There's nothing for me here now. I want to learn the ways of the Force
          and be a Jedi, like my father before me.
        </p>
        <p>
          You're all clear, kid. Let's blow this thing and go home! I suggest
          you try it again, Luke. This time, let go your conscious self and act
          on instinct. Obi-Wan is here. The Force is with him. Remember, a Jedi
          can feel the Force flowing through him.
        </p>
        <p>
          What!? Escape is not his plan. I must face him, alone. What!? The more
          you tighten your grip, Tarkin, the more star systems will slip through
          your fingers.
        </p>
        <p>
          Don't act so surprised, Your Highness. You weren't on any mercy
          mission this time. Several transmissions were beamed to this ship by
          Rebel spies. I want to know what happened to the plans they sent you.
          I suggest you try it again, Luke. This time, let go your conscious
          self and act on instinct.
        </p>
        <p>
          Still, she's got a lot of spirit. I don't know, what do you think?
          Obi-Wan is here. The Force is with him. She must have hidden the plans
          in the escape pod. Send a detachment down to retrieve them, and see to
          it personally, Commander. There'll be no one to stop us this time!
        </p>
        <p>
          You don't believe in the Force, do you? Don't underestimate the Force.
          A tremor in the Force. The last time I felt it was in the presence of
          my old master. Oh God, my uncle. How am I ever gonna explain this?
        </p>
      </div>
    </StickyProvider>
  );
};
