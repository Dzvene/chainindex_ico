import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export const Input = ({
  Icon,
  label,
  htmlFor,
  inputProps,
  buttonProps,
  className = "w-full",
  onChange,
  type
}) => {
  return (
    <FormControl   variant="outlined" className={className} onChange={onChange} >
      <InputLabel  htmlFor={htmlFor}>{label}</InputLabel>
      <OutlinedInput
        {...inputProps}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" {...buttonProps}>
              <Icon />
            </IconButton>
          </InputAdornment>
        }
        label={label}
        type={type}
      />
    </FormControl>
  );
};
