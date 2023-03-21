function Welcome(props: { title?: string }) {
  const delayTimeInMs = 200;

function SplitStringIntoSpans(title: string) {
    return title.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * delayTimeInMs}ms` }}>
        {char}
      </span>
    ));
  }
  const title = props.title ?? 'WELCOME';

  // ChangeTitle(){

  // }

  return (
    <div>
      {SplitStringIntoSpans(title)}
    </div>
  )
}

export default Welcome;
