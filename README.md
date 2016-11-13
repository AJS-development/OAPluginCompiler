# OAPluginCompiler
Plugin Compiler for OpenAgar

## Usage

1. Make your plugin inside the ./plugin folder
2. do `node compiler.js`
3. run `npm install`
4. Your plugin is now at ``plugin.ajs``

## Guide
See the example plugin. 

## Notes
Fs and child_process modules are not allowed for plugins for security. If you do use it. The security filter will catch it, which means the plugin wont be activated until it is added to the allowed list in pluginConfig.ini
