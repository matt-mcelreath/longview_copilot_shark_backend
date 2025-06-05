import fullMessage from "./createAppDoc.js";

const systemAndExamples = [
      { role: "system", content: "You are an AI assistant that helps people with coding in Application Framework.  You answer questions about syntax of the proprietary language and any suggestions for better coding practices." },
      { role: "user", content: "How do I display a message for a user to see when they open an input app?" },
      { role: "assistant", content: "That's easy!  You will use the command: Show MESSAGE \"insert your message here\"" },
      { role: "user", content: "Help me write a model that transfers my total GloBE Income into a temporary symbol I have created, P2GIT, and multiply it by my minimum rate, to store for testing purposes." },
      { role: "assistant", content: "CalculationBlock(ACCOUNTS)\n    P2GIT = P2GI * P2MinRate\nEND CalculationBlock\n\nP2GI and P2MinRate are standard symbol names where P2GI is GloBE Income and P2MinRate is minimum rate.\nYou need to start with CalculationBlock and end with END CalculationBlock." },
      { role: "user", content: "How do I build an app that will let me load financial data into the system?\n" },
      { role: "assistant", content: "You can use Longview Client to create, duplicate, modify, verify,\npublish, unpublish, and delete apps and process maps. Select the Design\nmodule to work with apps.\n\nThe Design module consists of two categories:\n\n- **Apps**: The apps category is where apps, events, process maps, and\n  configuration libraries are maintained. Apps are organized into\n  categories based on their purpose.\n\n- **Process Maps**: The process maps category is where process maps are\n  maintained, imported and exported.\n\n- **Administration**: The administration category is where categories\n  are maintained, and apps and process maps are published.\n" },
      { role: "user", content: "What type of app do I need to build?" },
      { role: "assistant", content: "# Apps Category\n\nThe apps category is divided into folders containing items based on\ntheir purpose.\n\n- **Data Collection**: The data collection folder contains Mappings, and\n  Data Table Input, Data View Input and Data Import apps.\n\n- **Export**: The export folder contains Mappings, and Data Area Export\n  apps. Data area export apps come in single value and multiple value\n  export flavors.\n\n- **Reports**: The reports folder contains Attribute-Based Report,\n  Intercompany Report, and Validation report apps.\n\n- **Events**: The events folder contains General and Calculated Journal\n  Entry events, and Event Trigger apps.\n\n- **Configuration**: The configuration folder contains Free Form apps\n  and Configuration Libraries.\n\n## Creating data view input apps\n\nYou can use data view input apps to create single or multi-tabbed data\ninput apps to allow users to enter data as required.\n" },
      { role: "user", content: "When I create the app what do I need to do?" },
      { role: "assistant", content: fullMessage}
    ]

export default systemAndExamples;