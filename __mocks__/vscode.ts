// Jtest Mock from https://github.com/jest-community/vscode-jest/blob/1867bde9ebf8c21d45409e7ad8a95a743ac4390d/__mocks__/vscode.ts
// under MIT License

const languages = {
    createDiagnosticCollection: jest.fn(),
    registerCodeLensProvider: jest.fn(),
  };

  const StatusBarAlignment = { Left: 1, Right: 2 };

  const window = {
    createStatusBarItem: jest.fn(() => ({
      show: jest.fn(),
      hide: jest.fn(),
      tooltip: jest.fn(),
    })),
    showErrorMessage: jest.fn(),
    showWarningMessage: jest.fn(),
    createTextEditorDecorationType: jest.fn(),
    createOutputChannel: jest.fn(),
    showWorkspaceFolderPick: jest.fn(),
    showQuickPick: jest.fn(),
    onDidChangeActiveTextEditor: jest.fn(),
    showInformationMessage: jest.fn(),
    createWebviewPanel: jest.fn(),
    registerTreeDataProvider: jest.fn(),
    createTreeView: jest.fn(),
    createTerminal: jest.fn(),
  };

  const TerminalLink = jest.fn();

  const workspace = {
    getConfiguration: jest.fn(),
    workspaceFolders: [],
    getWorkspaceFolder: jest.fn(),

    onDidChangeConfiguration: jest.fn(),
    onDidChangeTextDocument: jest.fn(),
    onDidChangeWorkspaceFolders: jest.fn(),
    onDidCreateFiles: jest.fn(),
    onDidDeleteFiles: jest.fn(),
    onDidRenameFiles: jest.fn(),
    onDidSaveTextDocument: jest.fn(),
    onWillSaveTextDocument: jest.fn(),
    asRelativePath: jest.fn(),
  };

  const OverviewRulerLane = {
    Left: null,
  };

  const Uri = {
    file: (f: any) => f,
    parse: jest.fn(),
    joinPath: jest.fn(),
  };
  const Range = jest.fn();
  const Location = jest.fn();
  const Position = jest.fn();
  const Diagnostic = jest.fn();
  const ThemeIcon = jest.fn();
  const DiagnosticSeverity = { Error: 0, Warning: 1, Information: 2, Hint: 3 };
  const ConfigurationTarget = { Global: 1, Workspace: 2, WorkspaceFolder: 3 };

  const debug = {
    onDidTerminateDebugSession: jest.fn(),
    startDebugging: jest.fn(),
    registerDebugConfigurationProvider: jest.fn(),
  };

  const commands = {
    executeCommand: jest.fn(),
    registerCommand: jest.fn(),
    registerTextEditorCommand: jest.fn(),
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const CodeLens = function CodeLens() {};

  const QuickInputButtons = {
    Back: {},
  };

  const tests = {
    createTestController: jest.fn(),
  };

  const TestRunProfileKind = {
    Run: 1,
    Debug: 2,
    Coverage: 3,
  };
  const ViewColumn = {
    One: 1,
    Tow: 2,
  };

  const TestMessage = jest.fn();
  const TestRunRequest = jest.fn();
  const ThemeColor = jest.fn();

  const EventEmitter = jest.fn(() => {
    fire: jest.fn()
    event: jest.fn()
  });

  const QuickPickItemKind = {
    Separator: -1,
    Default: 0,
  };

  const TreeItem = jest.fn();
  const TreeItemCollapsibleState = {
    None: 0,
    Collapsed: 1,
    Expanded: 2,
  };

  const CallHierarchyItem = jest.fn();
  const CancellationError = jest.fn();
  const CodeAction = jest.fn();
  const CompletionItem = jest.fn();
  const DocumentLink = jest.fn();
  const InlayHint = jest.fn();
  const SymbolInformation = jest.fn();
  const TypeHierarchyItem = jest.fn();

  export = {
    ThemeColor,
    CodeLens,
    CallHierarchyItem,
    CancellationError,
    CodeAction,
    CompletionItem,
    DocumentLink,
    InlayHint,
    SymbolInformation,
    TypeHierarchyItem,
    languages,
    StatusBarAlignment,
    window,
    workspace,
    OverviewRulerLane,
    Uri,
    Range,
    Location,
    Position,
    Diagnostic,
    ThemeIcon,
    DiagnosticSeverity,
    ConfigurationTarget,
    debug,
    commands,
    QuickInputButtons,
    tests,
    TestRunProfileKind,
    EventEmitter,
    TestMessage,
    TestRunRequest,
    ViewColumn,
    QuickPickItemKind,
    TreeItem,
    TreeItemCollapsibleState,
    TerminalLink,
  };
