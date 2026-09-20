import { Menubar } from "@kobalte/core/menubar";

const MenubarApp = () => {
  return (
    <Menubar class="bg-card">
      <Menubar.Menu>
        <Menubar.Trigger class="h-4 inline-flex justify-center items-center border-none outline-none transition-colors duration-200 ease-in-out appearance-none data-[highlighted=true]:bg-amber-50">
          File
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content class="min-w-56 p-2 bg-card rounded-md outline-none">
            <Menubar.Item class="rounded flex items-center h-8">New subtitles</Menubar.Item>
            <Menubar.Item class="rounded flex items-center h-8">Open subtitles</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar>
  );
};

export default MenubarApp;
