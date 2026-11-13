import { InstrumentationScope } from "../../src/enums/instrumentation-scope.enum";

describe("InstrumentationScope", () => {
  it("keeps the kit scope name that deployed backends recognise", () => {
    expect(InstrumentationScope.KIT).toBe("@omob/otel-kit");
  });
});
