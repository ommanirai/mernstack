export const Button = props => {
    var enabledLabel = props.enabledLabel || "Submit"
    var disabledLabel = props.disabledLabel || "Submiting..."

    var btn = props.isSubmitting
        ? <button disabled className="btn btn-primary mt-3" type="submit" value="Login">{disabledLabel}</button>
        : <button disabled={!props.isValidForm} className="btn btn-primary mt-3" type="submit" value="Login">{enabledLabel}</button>

    // return (
    //     <button className="btn btn-primary mt-3" type="submit" value="Login">{enabledLabel}</button>
    // )

    return btn;
}