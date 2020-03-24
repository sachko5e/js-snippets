import TextField from '@material-ui/core/TextField';
            renderCobDate = <div><TextField
                key={"Cob Date"}
                className={classNames(classes.margin, classes.textField)}
                id="cobDate"
                type="date"
                required={true}
                label={"Cob Date"}
                value={this.state.cobDate}
                onKeyPress={event => {
                    event.preventDefault();
                }}
                onChange={this.onChangeCobDate.bind(this)}
                InputProps={{
                    readOnly: this.readOnlyCobDateInput || this.props.modal.isLoading,
                    disableUnderline: true,
                    classes: {
                        root: classes.bootstrapRoot,
                        input: classes.bootstrapInput,
                    },
                }}
                InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                }}
            />
                &nbsp;
            </div>
