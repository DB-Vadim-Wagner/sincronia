import * as ts from "typescript";

const run: Sinc.PluginFunc = function(
  context: Sinc.FileContext,
  content: string,
  options: any
): Sinc.PluginResults {
  try {
    let output = ts.transpileModule(content, {}).outputText;
    return {
      success: true,
      output
    };
  } catch (e) {
    throw e;
  }
};

export { run };
