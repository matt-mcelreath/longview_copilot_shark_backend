const part1 = "Specifying properties Properties are general information about the app, event, or configuration library. The name of an app is displayed in the app publisher interface and Longview Client&#39;s navigation pane. The name of an event or configuration library is only referenced in configuration and generally should be kept short. ";
const part2 = "Theme and window size properties are only available for apps. Property values for name, description, version, template name, and template version can be retrieved during the execution of an app using the GetAppConfig procedure function. ";
const part3 = "Field Name: Type a name for the app. The name must be unique and can have a maximum of 94 characters, including spaces. You cannot include the slash (/), backslash (\\), colon (:), ampersand (&amp;), asterisk (*), question mark (?), double quotation mark (&quot;), the right-angle bracket (&gt;), left angle bracket (&lt;), pipe (|), or period (.) in the app name. ";
const part4 = "Description: Type a description for the app. The description can have a maximum of 100 characters. Version: Type a version to display in brackets after the description. Template version: Optional, up to 100 characters. ";
const part5 = "Theme: Longview or Windows. Window size: Maximized, Specify in Pixels, or Specify as Percentages. ";
const part6 = "Setting troubleshooting options: Enable troubleshooting mode, Re-use file for log and history, Enable troubleshooting messaging, Enable performance profiling, Enable detailed history logging, Enable history timer. ";
const part7 = "Data Area Definition: Use Data Area Definitions to specify the data areas to be used in the data input view. Name: up to 29 characters, alphanumeric and underscores only. ";
const part8 = "Field options: Download this data area, Submit from this data area, Submit comment, Lock this data area, Lock comment. ";
const part9 = "Data Area table: Symbols (name or variable like $ENTITIES$), Spec (All, Leaf, Parent, Root and Parent), Level. ";
const part10 = "Additional Configuration: AttributeFilter, Schedule, TempSym, AdjustedDetail.";

const fullMessage = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9 + part10;

export default fullMessage;