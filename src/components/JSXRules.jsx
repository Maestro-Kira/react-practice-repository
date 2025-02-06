function JSXRules() {
  const name = "Kira";
  const multiply = (num1, num2) => num1 * num2;
  return (
    <div>
      <h1>JSX Rules</h1>
      <p>
        <ul>
          <li>JSX must retun single parent element</li>
          <li>JSX elements must be properly closed</li>
          <li>
            JSX class tags must be name className, and instead of for in form
            use htmlform
          </li>
          <li>
            {name} answered that 2 * 5 = {multiply(2, 5)}
          </li>
        </ul>
      </p>
    </div>
  );
}

export default JSXRules;
