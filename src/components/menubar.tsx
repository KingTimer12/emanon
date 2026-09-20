import { Menubar } from "@kobalte/core/menubar";
import type { Component, JSXElement } from "solid-js";

const MenuItem: Component<{ children: JSXElement }> = ({ children }) => {
  return (
    <Menubar.Item class="rounded flex items-center h-8 hover:outline-none hover:bg-primary-hover hover:text-primary-foreground cursor-pointer transition-colors duration-200 ease-in-out px-2 text-sm">
      {children}
    </Menubar.Item>
  );
}

const MenubarApp = () => {
  return (
    <Menubar class="bg-card">
      <Menubar.Menu>
        <Menubar.Trigger class="h-4 inline-flex justify-center items-center border-none outline-none transition-colors duration-200 ease-in-out appearance-none data-[highlighted=true]:bg-amber-50">
          File
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content class="min-w-56 p-2 bg-card rounded-md outline-none shadow-md">
            <MenuItem>New subtitles</MenuItem>
            <MenuItem>Open subtitles</MenuItem>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar>
  );
};

export default MenubarApp;
