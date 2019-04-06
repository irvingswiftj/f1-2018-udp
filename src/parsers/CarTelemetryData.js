import F1Parser from './F1Parser';

/**
   * struct CarTelemetryData
   * {
   *     uint16    m_speed;                      // Speed of car in kilometres per hour
   *     uint8     m_throttle;                   // Amount of throttle applied (0 to 100)
   *     int8      m_steer;                      // Steering (-100 (full lock left)
   *                                             // to 100 (full lock right))
   *     uint8     m_brake;                      // Amount of brake applied (0 to 100)
   *     uint8     m_clutch;                     // Amount of clutch applied (0 to 100)
   *     int8      m_gear;                       // Gear selected (1-8, N=0, R=-1)
   *     uint16    m_engineRPM;                  // Engine RPM
   *     uint8     m_drs;                        // 0 = off, 1 = on
   *     uint8     m_revLightsPercent;           // Rev lights indicator (percentage)
   *     uint16    m_brakesTemperature[4];       // Brakes temperature (celsius)
   *     uint16    m_tyresSurfaceTemperature[4]; // Tyres surface temperature (celsius)
   *     uint16    m_tyresInnerTemperature[4];   // Tyres inner temperature (celsius)
   *     uint16    m_engineTemperature;          // Engine temperature (celsius)
   *     float     m_tyresPressure[4];           // Tyres pressure (PSI)
   * };
   */
export default class CarTelemetryData extends F1Parser {
  constructor() {
    super();
    this.endianess('little')
      .uint16('m_speed')
      .uint8('m_throttle')
      .int8('m_steer')
      .uint8('m_brake')
      .uint8('m_clutch')
      .int8('m_gear')
      .uint16('m_engineRPM')
      .uint8('m_drs')
      .uint8('m_revLightsPercent')
      .array('m_brakesTemperature', {
        type: 'uint16le',
        length: 4,
      })
      .array('m_tyresSurfaceTemperature', {
        type: 'uint16le',
        length: 4,
      })
      .array('m_tyresInnerTemperature', {
        type: 'uint16le',
        length: 4,
      })
      .uint16('m_engineTemperature')
      .array('m_tyresPressure', {
        type: 'floatle',
        length: 4,
      });
  }
}
