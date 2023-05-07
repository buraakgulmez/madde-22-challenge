import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {Divider} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {CalendarMonth} from "@mui/icons-material";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const [filterList, setFilterList] = useState([]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCheck = (name) => {
    setIsChecked(!isChecked);
    if (filterList.length > 0) {
      filterList.forEach((e, index) => {
        if (e === name) {
          filterList.splice(index, 1);
        }
      });
      setFilterList([...filterList, name]);
    } else {
      setFilterList([name]);
    }
  };

  useEffect(() => {
    console.log(filterList);
  }, [filterList]);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="px-4 md:px-16 py-4 flex justify-between items-center bg-[#F5F5F5] w-full ">
      <div>
        <Button
          sx={{
            color: open ? "#FF0D87" : "#000",
            "&:hover": {
              color: "#FF0D87",
              backgroundColor: "#F5F5F5",
            },
          }}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{textTransform: "unset"}}
        >
          <span className="mr-3">
            <AutoAwesomeIcon />
          </span>
          Filtreler
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{
            zIndex: 2,
          }}
        >
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper className="p-4">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <FormGroup>
                      <h2 className="font-bold">Etkinlik Mekanı</h2>
                      <FormControlLabel
                        onClick={() => handleCheck("hall")}
                        control={<Checkbox />}
                        label="Maximum Uniq Hall"
                      />
                      <Divider />
                      <FormControlLabel
                        onClick={() => handleCheck("box")}
                        control={<Checkbox />}
                        label="Maximum Unix Box"
                      />
                      <Divider />
                      <FormControlLabel
                        onClick={() => handleCheck("lounge")}
                        control={<Checkbox />}
                        label="Maximum Uniq Lounge "
                      />
                      <Divider />
                      <FormControlLabel
                        onClick={() => handleCheck("acikhava")}
                        control={<Checkbox />}
                        label="Maximum Uniq Açıkhava"
                      />
                      <Divider />
                      <FormControlLabel
                        onClick={() => handleCheck("fuaye")}
                        control={<Checkbox />}
                        label="Bahçe Fuaye"
                      />

                      <h2 className="font-bold">Etkinlik Tarihi</h2>
                      <FormControlLabel
                        onClick={() => handleCheck("guncel")}
                        control={<Checkbox />}
                        label="Güncel Etkinlikler"
                      />
                      <Divider />
                      <FormControlLabel
                        onClick={() => handleCheck("gecmis")}
                        control={<Checkbox />}
                        label="Geçmiş etkinlikler"
                      />
                    </FormGroup>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div>
        <p className="cursor-pointer active:opacity-60">
          <span className="mr-3">
            <CalendarMonth />
          </span>
          Takvimde Gör
        </p>
      </div>
    </div>
  );
};

export default Filter;
